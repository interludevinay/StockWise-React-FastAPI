from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Load environment variables FIRST
load_dotenv()

# Read env variables
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME")

# Safety check (optional but recommended)
if not all([DB_USER, DB_PASSWORD, DB_NAME]):
    raise ValueError("Database environment variables are not set properly")

db_url = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(db_url)
sessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)