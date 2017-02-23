const PICK_THIS = "PICK_THIS";
const PICK_COMPARE_TO = "PICK_COMPARE_TO";
const UPDATE_TAKE_THIS = "UPDATE_TAKE_THIS";
const UPDATE_COMPARE_TO = "UPDATE_COMPARE_TO";

export const pickThis = (data) => ({
    type : PICK_THIS,
    data : data
})

export const pickCompareTo = (data) => ({
    type : PICK_COMPARE_TO,
    data : data
})

export const updateTakeThis = (data) => ({
    type : UPDATE_TAKE_THIS,
    data : data
})

export const updateCompareTo = (data) => ({
    type : UPDATE_COMPARE_TO,
    data : data
})