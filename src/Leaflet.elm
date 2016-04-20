module Leaflet (create) where

-- imports are weird for Native modules
-- You import them as you would normal modules
-- but you can't alias them nor expose stuff from them
import Native.Leaflet

-- this will be our function which returns a number plus one
create : Int -> Int
create = Native.Leaflet.create
