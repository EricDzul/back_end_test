
let fake_data_base = require('../data/fakedatabase');

module.exports = class ContactService {
    constructor() {
    }
    /**
     * function getAll return all objects unfiltered
     * @returns array whit all objects
     */
    getAll() {
        try {
            return fake_data_base.sort(this.sort);
        } catch (e) {
            throw e;
        }
    }
    /**
     * function getSearch return all objects filtered by phrase(name)
     * @returns array whit all objects
     */
    getSearch(phrase) {
        try {
            let data_filter = []; // define array empty
            data_filter = fake_data_base.filter(e => {
                return e.name.toLowerCase().includes(phrase.toLowerCase())
            });
            data_filter.sort(this.sort);
            return data_filter;
        } catch (e) {
            throw e;
        }
    }

    /**
     * function return the first object by id
     * @returns array whit all objects
    */
    getById(id) {
        try {
            const data_filter = fake_data_base.find(e => {
                return e.id === id
            });
            return data_filter;
        } catch (e) {
            throw e;
        }
    }

    /**
     * function delete the first object by id and return this objetc
     * @returns array whit one object
    */
    deleteById(id) {
        try {
            const data_index = fake_data_base.findIndex(e => {
                return e.id === id
            });
            if (data_index !== -1) {
                fake_data_base.splice(data_index,1);
            }
            return data_index;
        } catch (e) {
            throw e;
        }
    }

    /**
     * function return  array object sort by name
     * @returns array rray object sort by name
    */
    sort(a, b) {
        try {
            return a.name.localeCompare(b.name);
        } catch (e) {
            throw e;
        }

    }
}
