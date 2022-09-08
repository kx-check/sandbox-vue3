/**
 * 手机号码验证
 * 用于表单验证
 */
export function validatorMobile(rule, mobile, callback) {
  // 允许空值，若需必填请添加多验证规则
  if (!mobile) {
    return callback()
  }
  if (!/^(1[3-9])\d{9}$/.test(mobile.toString())) {
    return callback(new Error(''))
  }
  return callback()
}

/**
 * 账户名验证
 */
export function validatorAccount(rule, val, callback) {
  if (!val) {
    return callback()
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(val)) {
    return callback(new Error(''))
  }
  return callback()
}

/**
 * 密码验证
 */
export function regularPassword(val) {
  if (/^[a-zA-Z0-9_]{6,32}$/.test(val)) return true
  return false
}

export function validatorPassword(rule, val, callback) {
  if (!val) {
    return callback()
  }
  if (!regularPassword(val)) {
    return callback(new Error(''))
  }
  return callback()
}
