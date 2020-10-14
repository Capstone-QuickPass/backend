import user from './schema/user';
import dataLog from './schema/datalog';
import facility from './schema/facility';

import mongoose from "mongoose";

export const User = mongoose.model("User", user);
export const DataLog = mongoose.model("DataLog", dataLog);
export const Facility = mongoose.model("Facility", facility);