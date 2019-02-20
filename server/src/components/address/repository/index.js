import settings from "../../../common/settings";
import constants from "../../../common/constants";
import AddressInMemoryRepository from "./address-inmemory-repository";
import AddressDbRepository from "./address-db-repository";

export default settings.dbType == constants.DB_TYPE.IN_MEMORY ? AddressInMemoryRepository : AddressDbRepository;