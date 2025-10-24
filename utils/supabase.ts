import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vjenhryeecoitzwuepux.supabase.co'
const supabasePublishableKey = 'sb_publishable_PPUKg6MI1fB_m-WWgG4eHg_S1MO52tZ'

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})