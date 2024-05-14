/**
 * 权限
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState) {
  const canUser = !!initialState.loginUser;
  const canAdmin = initialState.loginUser && initialState.loginUser.userRole === 'admin';
  return {
    canUser,
    canAdmin,
  };
}
