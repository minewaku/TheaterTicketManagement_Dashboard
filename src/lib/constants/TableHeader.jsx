export const TABLE_HEADERS = {
    USER: [
        { id: 'id', label: 'ID', boolean: false, labelAlign: 'center', dataAlign: 'center' },
        { id: 'name', label: 'Username', boolean: false, labelAlign: 'left', dataAlign: 'left' },
        { id: 'email', label: 'Email', boolean: false, labelAlign: 'left', dataAlign: 'left' },
        { id: 'phone', label: 'Phone', boolean: false, labelAlign: 'left', dataAlign: 'left' },
        { id: 'website', label: 'Website', boolean: false, labelAlign: 'center', dataAlign: 'center' },
    ],

    JOBS: [
        { id: 'userId', label: 'User ID', boolean: false, labelAlign: 'center', dataAlign: 'center' },
        { id: 'id', label: 'ID', boolean: false, labelAlign: 'center', dataAlign: 'center' },
        { id: 'title', label: 'Title', boolean: false, labelAlign: 'left', dataAlign: 'left' },
        { id: 'completed', label: 'Completed', boolean: true, labelAlign: 'center', dataAlign: 'center' },
    ],

    POSTS: [
        { id: 'userId', label: 'User ID', boolean: false, labelAlign: 'right', dataAlign: 'justify' },
        { id: 'id', label: 'ID', boolean: false, labelAlign: 'center', dataAlign: 'center' },
        { id: 'title', label: 'Title', boolean: false, labelAlign: 'left', dataAlign: 'left' },
        { id: 'body', label: 'Body', boolean: false, labelAlign: 'left', dataAlign: 'left' },
    ]
}