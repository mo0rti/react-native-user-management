import settings from "../../../common/settings";
import constants from "../../../common/constants";
import UserInMemoryRepository from "./user-inmemory-repository";
import UserDbRepository from "./user-db-repository";

export default settings.dbType == constants.DB_TYPE.IN_MEMORY ? UserInMemoryRepository : UserDbRepository;