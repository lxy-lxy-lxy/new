import request from '@/utils/request';

export async function fakeSubmitForm(params) {
  return request('/api/test', {
    method: 'POST',
    data: params,
  });
}
