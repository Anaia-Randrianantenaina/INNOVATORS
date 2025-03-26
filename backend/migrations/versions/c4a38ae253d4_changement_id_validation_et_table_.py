"""changement id validation,et table demande et table user,table validation

Revision ID: c4a38ae253d4
Revises: efc40e52e125
Create Date: 2025-03-25 18:31:01.913324

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c4a38ae253d4'
down_revision = 'efc40e52e125'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('demande',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('tel_user', sa.String(length=100), nullable=False),
    sa.Column('status_demande', sa.String(length=50), nullable=False),
    sa.Column('justification_demande', sa.Text(), nullable=False),
    sa.Column('quantite_demande', sa.String(length=100), nullable=False),
    sa.Column('notification_demande', sa.Text(), nullable=True),
    sa.Column('date_demande', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['tel_user'], ['user.tel_user'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('validation',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('tel_user', sa.String(length=100), nullable=False),
    sa.Column('status_validation', sa.String(length=50), nullable=False),
    sa.Column('id_demande', sa.Integer(), nullable=False),
    sa.Column('date_validation', sa.String(length=100), nullable=False),
    sa.Column('notification', sa.String(length=250), nullable=False),
    sa.Column('signature_responsable', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['id_demande'], ['demande.id'], ),
    sa.ForeignKeyConstraint(['tel_user'], ['user.tel_user'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id_demande')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('validation')
    op.drop_table('demande')
    # ### end Alembic commands ###
