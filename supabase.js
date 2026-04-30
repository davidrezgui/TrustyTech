// supabase.js - إعدادات قاعدة البيانات
const SUPABASE_URL = 'https://ctkkkpcjwebkrcbzsvpf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0a2trcGNqd2Via3JjYnpzdnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1Mzg0NzMsImV4cCI6MjA5MzExNDQ3M30.YB10D0463cSJ1Nm_Y9etMwwfEzn28s0OiN_mnQW5IMc';

// إنشاء اتصال Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
