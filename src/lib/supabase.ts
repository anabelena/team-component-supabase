import {createClient} from '@supabase/supabase-js'
import { supabaseURL,supabaseAnonKey } from '@/config'

export const supabase = createClient(supabaseURL,supabaseAnonKey)