import { UnitModelCreateData, UnitModel } from "@kitledger/sdk/types";
import { __host_rpc } from "./internal/runtime.js";

export async function create(data: UnitModelCreateData): Promise<UnitModel> {
	return await __host_rpc<UnitModelCreateData, UnitModel>(
		"UNIT_MODEL.CREATE",
		data,
	);
};