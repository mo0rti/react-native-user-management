import { Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockUsers, mockUsersFailed } from "@Store/mock";
import { guid } from '@Helpers/General-Helpers';

const _api = ({ userid, page, pagesize, token }) => HttpClient(token).getAsync(Urls.USER.INDEX, { page, pagesize });

const _mock = ({ userid, page, pagesize, token }) => new Promise((resolve, reject) => {

    if (page > 1) {
        setTimeout(() => {            
            resolve([]);
        }, Settings.MOCK_SERVICES_TIMEOUT);
    } else {
        setTimeout(() => {
            resolve(mockUsers);
            // reject(mockUsersFailed);
        }, Settings.MOCK_SERVICES_TIMEOUT);
    }
});

const _users = request => (Settings.USE_MOCK_SERVICES) ? _mock(request) : _api(request);

export const users = async (request) => {
    try {
        let { status, data, message } = await _users(request);        
        if (status)
            return Promise.resolve(data);
        else
            return Promise.reject({ message });
    }
    catch (error) {
        return Promise.reject({ message: error.message || error });
    }
};
