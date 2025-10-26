import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

const CACHE_DIR = path.join(os.tmpdir(), 'unruggable-cache');

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
}

export async function getCached<T>(
  key: string,
  options: CacheOptions = {}
): Promise<T | null> {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    const filePath = path.join(CACHE_DIR, `${key}.json`);
    
    const data = await fs.readFile(filePath, 'utf-8');
    const cached = JSON.parse(data);
    
    // Check if cache is still valid
    if (options.ttl) {
      const now = Date.now();
      const age = now - cached.timestamp;
      if (age > options.ttl) {
        return null; // Cache expired
      }
    }
    
    return cached.data;
  } catch {
    return null; // Cache miss
  }
}

export async function setCache<T>(
  key: string,
  data: T
): Promise<void> {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    const filePath = path.join(CACHE_DIR, `${key}.json`);
    
    const cacheData = {
      data,
      timestamp: Date.now(),
    };
    
    await fs.writeFile(filePath, JSON.stringify(cacheData), 'utf-8');
  } catch (_error) {
    console.error('Error writing cache:', _error);
  }
}

export async function clearCache(key: string): Promise<void> {
  try {
    const filePath = path.join(CACHE_DIR, `${key}.json`);
    await fs.unlink(filePath);
  } catch {
    // Ignore errors if file doesn't exist
  }
}