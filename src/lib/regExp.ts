// 이메일, 번호, 정규식
export const EMAIL_REGEX = new RegExp(
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/
);

export const PHONE_REGEX = new RegExp(/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/);
