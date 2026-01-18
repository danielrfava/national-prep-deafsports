
from fastapi import FastAPI

app = FastAPI(title="NPD API")

@app.get("/health")
async def health():
    return {"ok": True}

@app.get("/teams")
async def teams():
    return {"division1": ["isd","msd","tsd","csd-f","csd-r","mssd"], "division2": []}
