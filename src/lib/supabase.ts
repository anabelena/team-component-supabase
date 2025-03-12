import {createClient} from '@supabase/supabase-js'
import { supabaseURL,supabaseAnonKey } from '@/config'

// export const supabase = createClient('https://smfyqeommefnkigxyivb.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZnlxZW9tbWVmbmtpZ3h5aXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDU3MzIsImV4cCI6MjA1NzIyMTczMn0.Ed__7q1H4HgWfiK69nzHPnbPuXYf2G9WBZKlMDXHXsU')
export const supabase = createClient(supabaseURL,supabaseAnonKey)