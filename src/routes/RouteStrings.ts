// routes

const FACILITY = "/facility";
const USER = "/user";
const DATALOG = "/datalog"

const BY = "/by";
export const ID = BY + "/:id";
export const NEW = "/new";
export const LIST = "/list";

export const DATALOG_BY_ID = BY + "/id/:id";
export const DATALOG_BY_FACILITY = BY + "/facility/:facility";

const PERSONLIST = "/personlist";
const NEWPERSON = "/newPerson";
const USERLIST = "/userList";

export const MAIN_STRINGS = { FACILITY, USER, DATALOG, PERSONLIST, NEWPERSON, USERLIST};
