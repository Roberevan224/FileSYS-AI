import crypto from 'node:crypto';
export function hashPin(pin, salt=crypto.randomBytes(16).toString('hex')) {
  return {salt, hash:crypto.scryptSync(String(pin),salt,32).toString('hex')};
}
export function verifyPin(pin, record) {
  if (!record?.salt || !record?.hash) return false;
  const candidate=crypto.scryptSync(String(pin),record.salt,32).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(candidate,'hex'),Buffer.from(record.hash,'hex'));
}
