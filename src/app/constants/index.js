const HOME_ELEMENTS = [
    {
        type: 'div',
        content: '',
        attr: [{
            type: 'id',
            value: 'search-result'
        }]
    },
    {
        type: 'input',
        content: '',
        attr: [{type: 'id', value: 'student'},
            {
                type: 'class',
                value:
                    'w-1/6 border-b border-b-2 border-teal-500 py-2 appearance-none bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none',
            },
            {type: 'type', value: 'text'}]
    },
    {
        type: 'div',
        content: 'Academy Book Search',
    }
]

const STUDENT_ELEMENTS = {
    CARD: {
        type: 'div',
        content: '',
        attr: [{
            type: 'id',
            value: 'student-card'
        }]
    },
    ADD_COMMENT_BTN: {
        type: 'button',
        content: 'add comment',
        attr: [
            {
                type: 'id',
                value: 'add-comment'
            },
            {
                type: 'class',
                value: 'border bg-blue-500 text-white p-2 rounded-full',
            }
        ]
    },
    COMMENT: {
        type: 'input',
        content: '',
        attr: [{type: 'id', value: 'student-comment'},
            {
                type: 'class',
                value: 'w-1/6 border-b border-b-2 border-teal-500 py-2 appearance-none bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            }]
    }
}

export {STUDENT_ELEMENTS, HOME_ELEMENTS};