import { join } from "path"
/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 * @returns 
 */

const show_image = async (req, res, next) => {
    try {
        let { filename } = req.params
        return res.sendFile(join(process.cwd(), "src", "shared", "upload", filename))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 * @returns 
 */

const download_image = async (req, res, next) => {
    try {
        let { filename } = req.params
        return res.download(join(process.cwd(), "src", "shared", "upload", filename))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export { show_image, download_image }