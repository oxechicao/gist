```mermaid
stateDiagram-v2
  state "home" as h
  state if_m <<choice>>

  [*] --> h: open application
  h --> if_m: home section
  if_m -->

  state Simple Time Routine {
} 
```
