import { supabase } from '@/supabase'

export const insertMessage = async (content, author_id) => {
    await supabase.from('messages').insert({
        content,
        author_id
    })
}

export const fetchMessages = async () => {
    const { data, error } = await supabase
        .from('messages')
        .select('*, author:profiles(username, id, avatar_url)')
        .order('created_at')
        .limit(20)

    if(error)
        console.error('Error fetching messages: ', error)
    return data
}
