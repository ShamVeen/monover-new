<<<<<<< HEAD
import helperApi from "../index"
import { ALL_API_CONSTANTS } from "../constant"
const REVIEW_API = ALL_API_CONSTANTS.review

const getAllDocuments = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allDocuments)
    return response
}

const getSuggestedDocuments = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.suggestedDocuments)
    return response
}

const getPreviousDocuments = async (id) => {
    const response = await helperApi.getRequest(`/api/subproject/${id}/document/`)
    return response
}

const addDocument = async (body) => {
    const response = await helperApi.postRequest(REVIEW_API.addDocuments, body)
    return response
}

const getFolders = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allFolders)
    return response
}

const getBatches = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allBatches)
    return response
}


export {
    getAllDocuments,
    getSuggestedDocuments,
    addDocument,
    getFolders,
    getPreviousDocuments,
    getBatches
=======
import helperApi from "../index"
import { ALL_API_CONSTANTS } from "../constant"
const REVIEW_API = ALL_API_CONSTANTS.review

const getAllDocuments = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allDocuments)
    return response
}

const getSuggestedDocuments = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.suggestedDocuments)
    return response
}

const getPreviousDocuments = async (id) => {
    const response = await helperApi.getRequest(`/api/subproject/${id}/document/`)
    return response
}

const addDocument = async (body) => {
    const response = await helperApi.postRequest(REVIEW_API.addDocuments, body)
    return response
}

const getFolders = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allFolders)
    return response
}

const getBatches = async (body) => {
    const response = await helperApi.getRequest(REVIEW_API.allBatches)
    return response
}


export {
    getAllDocuments,
    getSuggestedDocuments,
    addDocument,
    getFolders,
    getPreviousDocuments,
    getBatches
>>>>>>> 177f2d865ded16cd2f094a0bf6a377b12c4a8c10
}