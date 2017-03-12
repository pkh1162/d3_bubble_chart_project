export const BUBBLE_PICKED = 'BUBBLE_PICKED';
export const GET_PROFILE = 'GET_PROFILE';


export const pickBubble = (bubble) => ({
    type : BUBBLE_PICKED,
    bubble : bubble
})

export const getProfile = (profile) => ({
    type : GET_PROFILE,
    profile : profile
})



