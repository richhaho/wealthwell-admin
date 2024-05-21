import { User as SupabaseUser } from '@supabase/supabase-js';

export interface User {
    email?: string;
    user_metadata?: {
        avatar_url?: string;
        name?: string;
    }
}

export interface UserResponse {
    data: {
        user: SupabaseUser | null;
    }
}
