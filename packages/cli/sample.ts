import { unitModel } from "@kitledger/actions";

export default async function() {

  const model = await unitModel.create({
	ref_id: "sample-model",
	alt_id: "sample-model-alt",
	name: "Sample Model",
	active: true,
  });

  console.log("Sample Model:", model);
}