export const UPDATE_TAKE_THIS = "UPDATE_TAKE_THIS";
export const UPDATE_COMPARE_TO = "UPDATE_COMPARE_TO";
export const PICK_INITIAL_BUBBLES = "PICK_INITIAL_BUBBLES"


export const updateTakeThis = (data) => ({
    type : UPDATE_TAKE_THIS,
    data : data
})

export const updateCompareTo = (data) => ({
    type : UPDATE_COMPARE_TO,
    data : data
})
