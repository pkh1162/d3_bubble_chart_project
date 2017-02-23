const UPDATE_BUBBLE_POSITIONS = 'UPDATE_BUBBLE_POSITIONS';


export const updateBubblePositions = (data) => ({
    type : UPDATE_BUBBLE_POSITIONS,
    data2 : data 
})


export const beginSimulation = () => ({
    type : 'BEGIN_SIMULATION',
})

export const getSimulation = () => ({
    type : 'GET_SIMULATION',
})

export const pickBubble = (bubble) => ({
    type : 'BUBBLE_PICKED',
    bubble : bubble
})

export const newSimulation = (bubble) => ({
    type : 'NEW_SIMULATION'
})

