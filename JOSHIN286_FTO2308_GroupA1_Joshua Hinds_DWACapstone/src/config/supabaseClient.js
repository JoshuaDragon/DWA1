import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ipojieaggceqcqrzhezv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwb2ppZWFnZ2NlcWNxcnpoZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NTAyMzgsImV4cCI6MjAwODUyNjIzOH0.0h4m5k-0UL0WLpcINAL1cvSTAymLEL3rXRAA8ylKeuQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase