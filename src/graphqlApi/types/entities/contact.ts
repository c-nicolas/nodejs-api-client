export type ContactsType = {
  id?: number;
  active?: boolean;
  communicationEmail?: string;
  effectiveDate?: string;
  email?: string;
  erpId?: string;
  firstname?: string;
  lastname?: string;
  locked?: boolean;
  phone?: string;
  status?: string;
  tseAccountStatus?: string;
  username?: string;
  type?: ContactTypeType;
  role?: ContactRole;
};

type ContactRole = {
  id?: number;
  name?: string;
};

type ContactTypeType = {
  id?: number;
  name?: string;
};
