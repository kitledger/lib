import { entityModel } from '@kitledger/actions';

const model = await entityModel.create({ ref_id: '123', alt_id: '456', active: true, name: 'Test Model' });
console.log(model);