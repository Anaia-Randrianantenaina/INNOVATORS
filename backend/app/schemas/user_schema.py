from marshmallow import Schema, fields, validate

class UserSchema(Schema):
    photo = fields.Str(required=True)
    nom_user = fields.Str(required=True)
    email_user = fields.Str(required=True, validate=validate.Email())
    role_user = fields.Str(required=True)
    mot_de_passe = fields.Str(required=True)
    tel_user = fields.Str(required=True)
