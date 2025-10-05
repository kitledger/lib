# Kitledger Actions

> [!WARNING]
>This project is in an experimental phase. Not even under heavy development yet.

Type library for authoring typesafe Kit Actions code.


## Documentation Notes

### Date Time

We are standardizing around UTC ISO Strings.
We cannot prevent developers from using Date and Temporal JS APIs, but the types are constained to strings, which must in reality be ISO strings. Here are the two methods they must use to convert from Date and Temporal to ISO string parameters respectively.

```javascript
const now = new Date();

// Convert to ISO string before passing to the API
await kl.entity.create({
    model_ref_id: 'event',
    data: {
        event_time: now.toISOString(), // .toISOString() is the key
        name: 'System Maintenance'
    }
});

const temporalNow = Temporal.Now.instant();
await kl.entity.update({
    id: '123',
    data: {
        last_updated: temporalNow.toString() // .toString() works for Temporal
    }
});
```