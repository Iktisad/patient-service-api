import express from 'express';
import { create, patient, patientList, remove, update,updateAddress } from '../controllers/PatientsController.js'
const router = express.Router();

/**
 * @swagger
 * /api/patients:
 *  get:
 *      summary: Represents all user
 *      description: returns all the patient users
 *      tags:
 *          - Patients
 *      responses:
 *          200:
 *            description: list of all patient users
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: "Displaying Results"
 *                    result:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          _id:
 *                            type: integer
 *                            description: The user ID.
 *                            example: 0
 *                          firstName:
 *                            type: string
 *                            description: The user's first name.
 *                            example: Leanne 
 *                          lastName:
 *                            type: string
 *                            description: The user's last name.
 *                            example: Graham 
 *                          contact:
 *                            type: string
 *                            description: The user's contact.
 *                            example: +880-123-456-7890 
 *                          gender:
 *                            type: string
 *                            description: The user's gender.
 *                            example: female 
 *                          religion:
 *                            type: string
 *                            description: The user's religion.
 *                            example: long cucumber 
 *                          maritalStatus:
 *                            type: string
 *                            description: The user's marital status.
 *                            example: complicated 
 *                          bloodGroup:
 *                            type: string
 *                            description: The user's contact.
 *                            example: O +ve 
 *                          nationality:
 *                            type: string
 *                            description: The user's nationality.
 *                            example: no mans land 
 *                          emergency:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                _id:
 *                                  type: string
 *                                  example: 1
 *                                name:
 *                                  type: string
 *                                  example: Luffy
 *                                relation:
 *                                  type: string
 *                                  example: mutual aquintance
 *                                contact:
 *                                  type: string
 *                                  example: +880-161-111-1111
 *                          address:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                _id:
 *                                  type: string
 *                                  example: 1
 *                                addressType:
 *                                  type: string
 *                                  example: Present
 *                                country:
 *                                  type: string
 *                                  example: Wano
 *                                city:
 *                                  type: string
 *                                  example: Onigashima
 *                                area:
 *                                  type: string
 *                                  example: kaido's place
 *                                location:
 *                                  type: string
 *                                  example: +880-161-111-1111
 *                          puuid:
 *                            type: string
 *                            description: The user's nationality.
 *                            example: P0000001
 *  
 * 
 */

// GET: /api/patients
router.get('/', patientList);

/**
 * @swagger
 * /api/patients/{id}:
 *   get:
 *     summary: Retrieve a single patient user.
 *     description: Retrieve a single patient user based on id or puuid.
 *     tags:
 *       - Patients
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: alpha numeric ID of the user to retrieve.
 * 
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: "Displaying Results"
 *                    result:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          _id:
 *                            type: integer
 *                            description: The user ID.
 *                            example: 0
 *                          firstName:
 *                            type: string
 *                            description: The user's first name.
 *                            example: Leanne 
 *                          lastName:
 *                            type: string
 *                            description: The user's last name.
 *                            example: Graham 
 *                          contact:
 *                            type: string
 *                            description: The user's contact.
 *                            example: +880-123-456-7890 
 *                          gender:
 *                            type: string
 *                            description: The user's gender.
 *                            example: female 
 *                          religion:
 *                            type: string
 *                            description: The user's religion.
 *                            example: long cucumber 
 *                          maritalStatus:
 *                            type: string
 *                            description: The user's marital status.
 *                            example: complicated 
 *                          bloodGroup:
 *                            type: string
 *                            description: The user's contact.
 *                            example: O +ve 
 *                          nationality:
 *                            type: string
 *                            description: The user's nationality.
 *                            example: no mans land 
 *                          emergency:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                _id:
 *                                  type: string
 *                                  example: 1
 *                                name:
 *                                  type: string
 *                                  example: Luffy
 *                                relation:
 *                                  type: string
 *                                  example: mutual aquintance
 *                                contact:
 *                                  type: string
 *                                  example: +880-161-111-1111
 *                          address:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                _id:
 *                                  type: string
 *                                  example: 1
 *                                addressType:
 *                                  type: string
 *                                  example: Present
 *                                country:
 *                                  type: string
 *                                  example: Wano
 *                                city:
 *                                  type: string
 *                                  example: Onigashima
 *                                area:
 *                                  type: string
 *                                  example: kaido's place
 *                                location:
 *                                  type: string
 *                                  example: +880-161-111-1111
 *                          puuid:
 *                            type: string
 *                            description: The user's nationality.
 *                            example: P0000001
 */
// GET: /api/patients/:id

router.get('/:id', patient);

// GET: /api/patients/create
router.post('/create', create);

// PUT: /api/patients/:id/update
router.put('/:id/update', update);

// DELETE: /api/patients/:id/delete
router.delete('/:id/delete', remove);

// PUT: /api/patients/:id/updateAddress
router.put('/:id/:addrId/update-address', updateAddress);

// // PUT: /api/patients/:id/update Emergency
// router.get('/:id/emId/update-emergency', updateEmergency);

export default router;