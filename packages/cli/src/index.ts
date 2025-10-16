import { entityModel } from '@kitledger/actions';

const model = await entityModel.create({ id: '123', name: 'Test Model' });
console.log(model);