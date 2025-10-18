export type AccountCreateData = {
    ref_id: string;
    alt_id: string | null;
    balance_type: BalanceType;
    ledger_id: string;
    parent_id?: string | null | undefined;
    name: string;
    meta: {
        [x: string]: string | number | boolean | Date | null;
    } | null;
    active: boolean;
    created_at?: Date | undefined;
    updated_at?: Date | null | undefined;
}


export type Account = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date | null;
    id: string;
    balance_type: BalanceType;
    parent_id: string | null;
    meta: BaseMetaProperty | null;
    ledger_id: string;
}

export type ApiToken = {
    name: string;
    id: string;
    user_id: string;
    revoked_at: Date | null;
}

export type BaseMetaProperty = Record<string, string | number | boolean | Date | null>;

export enum BalanceType {
	DEBIT = "debit",
	CREDIT = "credit",
}

export type EntityModelCreateData = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at?: Date | undefined;
    updated_at?: Date | null | undefined;
}

export type EntityModel = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date | null;
    id: string;
}

export type LedgerCreateData = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    description: string | null;
    unit_model_id: string;
    active: boolean;
    created_at?: Date | undefined;
    updated_at?: Date | null | undefined;
}

export type Ledger = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date | null;
    id: string;
    description: string | null;
    unit_model_id: string;
}

export type PermissionAssignment = {
    created_at: Date;
    updated_at: Date | null;
    id: string;
    user_id: string | null;
    permission_id: string;
    role_id: string | null;
}

export type Permission = {
    name: string;
    created_at: Date;
    updated_at: Date | null;
    id: string;
    description: string | null;
}

export type Role = {
    name: string;
    created_at: Date;
    updated_at: Date | null;
    id: string;
    description: string | null;
}

export type SystemPermission = {
    created_at: Date;
    updated_at: Date | null;
    id: string;
    user_id: string;
    permission: string;
}

export type TransactionModelCreateData = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at?: Date | undefined;
    updated_at?: Date | null | undefined;
}

export type TransactionModel = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date | null;
    id: string;
}

export type UnitModelCreateData = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at?: Date | undefined;
    updated_at?: Date | null | undefined;
}

export type UnitModel = {
    ref_id: string;
    alt_id: string | null;
    name: string;
    active: boolean;
    created_at: Date;
    updated_at: Date | null;
    id: string;
    base_unit_id: string | null;
}

export type User = {
    created_at: Date;
    updated_at: Date | null;
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password_hash: string;
}

export type UserRole = {
    created_at: Date;
    updated_at: Date | null;
    id: string;
    user_id: string;
    role_id: string;
}