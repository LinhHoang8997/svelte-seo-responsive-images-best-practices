export const prerender = true;

export async function load({request}) {
    return {
            user_agent: request.headers.get('user-agent')
    }
}