import type { RequestConfig } from '@umijs/max';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}

// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    //错误抛出
    errorHandler() {},
    //错误接收及处理
    errorThrower() {},
  },

  // 请求拦截器
  requestInterceptors: [],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在 data 中读出，部分字段可在 config 中找到
      const data: any = response.data;
      const path = response.request.responseURL;
      if (!data) {
        throw new Error('服务异常');
      }
      const code = data.code ?? 50000;
      // 未登录，且不为获取用户登录信息接口
      if (
        code === 40100 &&
        !path.includes('user/get/login') &&
        !location.pathname.includes('/user/login')
      ) {
        // 跳转至登录页
        window.location.href = `/user/login?redirect=${window.location.href}`;
        throw new Error('请先登录');
      }
      if (code !== 0) {
        console.error(`request error, path = ${path}`, data);
        throw new Error(data.message ?? '服务器错误');
      }
      return response;
    },
  ],
};
