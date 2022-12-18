import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host:process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

}).promise()


export async function AllUser() { 
    const [rows] = await pool.query("SELECT * FROM info_character")
    return rows
}

export async function IdUser(id){
    const [rows] = await pool.query(`SELECT * FROM info_character WHERE id= ? `,[id])
    return rows[0]
}
export async function UserClasse(classe){
    const [rows] = await pool.query(`SELECT * FROM info_character WHERE classe= ? `,[classe])
    return rows
}

export async function UserName(nome){
    const [rows] = await pool.query(`SELECT id,info.nome, info.classe, info.talents, info.modalidade, info.build, info.damage, info.capa,
    h.item_head, h.item_ench, h.gem_one , h.gem_two, h.gem_three, h.screen_head FROM info_character info INNER JOIN head as h
    on info.id = h.fk_h where nome= ?`,[nome])
    return rows
}

export async function CreateUser(nome,raca,classe,talents,modalidade,build,damage){
    const result = await pool.query(`INSERT INTO info_character (nome,raca,classe,talents,modalidade,build,damage)
    VALUES(?,?,?,?,?,?,?)`,[nome,raca,classe,talents,modalidade,build,damage])
    const id = result.insertId
    return IdUser(id)
}
//const notes = await UserName("Tarumack")                                                                                                                                                            
//console.log(notes)