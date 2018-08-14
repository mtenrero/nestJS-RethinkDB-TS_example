import * as rethink from "rethinkdb"

export const RethinkProvider = {
    provide: 'RethinkProvider',
    useFactory: async () => {
      const conn = await rethink.connect("localhost")
      return conn
    }
  }