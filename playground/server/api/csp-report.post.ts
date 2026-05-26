export default defineEventHandler(async (event) => {
  console.log('csp report endpoint called', event.path)
  
  const body = await readBody(event)
  const time = new Date().toISOString()
  
  console.log({ 
    timestamp: time,
    data: body
  });
  return { ok: true }
})
