import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fqgkbbmoxpobahwxgypm.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZ2tiYm1veHBvYmFod3hneXBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODAyMTQxNywiZXhwIjoxOTkzNTk3NDE3fQ.bVgZWvEgDPJLFrYV6qGqDeBrePNOHDpAhI9WNcJF5yw',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZ2tiYm1veHBvYmFod3hneXBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODAyMTQxNywiZXhwIjoxOTkzNTk3NDE3fQ.bVgZWvEgDPJLFrYV6qGqDeBrePNOHDpAhI9WNcJF5yw',
    'content-type': 'application/json',
  },
});

export const doPostRequest = axios.create({
  baseURL: 'https://fqgkbbmoxpobahwxgypm.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZ2tiYm1veHBvYmFod3hneXBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODAyMTQxNywiZXhwIjoxOTkzNTk3NDE3fQ.bVgZWvEgDPJLFrYV6qGqDeBrePNOHDpAhI9WNcJF5yw',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZ2tiYm1veHBvYmFod3hneXBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODAyMTQxNywiZXhwIjoxOTkzNTk3NDE3fQ.bVgZWvEgDPJLFrYV6qGqDeBrePNOHDpAhI9WNcJF5yw',
    'content-type': 'application/json',
    prefer: 'return=minimal',
  },
});
