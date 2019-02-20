import fetchMock from 'fetch-mock';
import expect from 'expect';
import { users } from '@Actions/Users-Action';
import { Urls } from '@Constants';
import { mockUsers, mockUsersFailed } from "@Store/mock";

describe('Users async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('received users on successful api call', () => {

        // arrange
        const request = { userid: '123', page: 1, pagesize: 20, token: 'ASBC' };
        let url = `${Urls.USER.INDEX}?page=${request.page}&pagesize=${request.pagesize}`;
        console.log(url);
        fetchMock
            .getOnce(url,
                {
                    body: mockUsers,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        const expectedResult = mockUsers.data;

        // act, assert
        return users(request)
            .then(result => {
                expect(result).toEqual(expectedResult)
            });
    });

    it('returns error when calling the api is failed', () => {

        // arrange
        const request = { userid: '123', page: 1, pagesize: 20, token: 'ASBC' };
        let url = `${Urls.USER.INDEX}?page=${request.page}&pagesize=${request.pagesize}`;
        fetchMock
            .getOnce(url,
                {
                    status: 500,
                    body: mockUsersFailed,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        const expectedResult = { message: mockUsersFailed.message };

        // act, assert
        return users(request)
            .then(() => { })
            .catch(error => {
                expect(error).toEqual(expectedResult)
            });
    });
});