/* eslint-disable no-unreachable */
import { listConstants } from "../constants";
import { getDataList } from "../services";

export const getAllList = () => {
    try {
        return async (dispatch) => {
            const list = await getDataList()
            if (list.message === "success") {
                dispatch(success(list.data))
            } else {
                dispatch(failure(list.message))
            }
        }   

        function success(payload) {
            return {
                type: listConstants.GETALL_LIST_SUCCESS,
                payload
            }
        }

        function failure(payload) {
            return { type: listConstants.GETALL_LIST_FAILURE, payload };
          }
    } catch (error) {
        return error
    }
}