import axiosClient from './axiosClient'

const apiNews = {
    search: (params) => {
        const url = 'search'
        return axiosClient.get(url, { params })
    },
}

export default apiNews
