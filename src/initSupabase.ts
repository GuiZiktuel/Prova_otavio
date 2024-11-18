import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";


export const supabase = createClient("https://xgsfuoitiipizicrujca.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnc2Z1b2l0aWlwaXppY3J1amNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzM4NDQsImV4cCI6MjA0NzUwOTg0NH0.w45vGXr1gSgz1Qcw4k_-4GjVK-KwIiEMN9qvgfy3zMA", {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: true
});
