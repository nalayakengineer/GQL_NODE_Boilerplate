import fs from 'fs'
import path from 'path'

export const loadTypeSchema = type =>
    new Promise((resolve, reject) => {

        const pathToSchema = path.join(
            process.cwd(),
            `src/App/${type}/${type}.gql`
        )
        fs.readFile(pathToSchema, { encoding: 'utf-8' }, (err, schema) => {
            if (err) {
                return reject(err)
            }

            resolve(schema)
        })
    })