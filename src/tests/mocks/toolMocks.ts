import iTool from '../../interfaces/tool.interface'

export function basicTool () {
    const basicTool: iTool = {
        title: "Basic Tool!",
        description: "Basic description of a tool",
        link: 'https://google.com',
        tags: ['Basic', 'tool']
    }
    return basicTool
}
